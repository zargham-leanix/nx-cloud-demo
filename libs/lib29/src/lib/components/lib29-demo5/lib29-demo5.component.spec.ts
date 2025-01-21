import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo5Component } from './lib29-demo5.component';

describe('Lib29Demo5Component', () => {
  let component: Lib29Demo5Component;
  let fixture: ComponentFixture<Lib29Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
