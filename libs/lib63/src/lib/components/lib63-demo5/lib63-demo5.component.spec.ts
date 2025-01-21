import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo5Component } from './lib63-demo5.component';

describe('Lib63Demo5Component', () => {
  let component: Lib63Demo5Component;
  let fixture: ComponentFixture<Lib63Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
