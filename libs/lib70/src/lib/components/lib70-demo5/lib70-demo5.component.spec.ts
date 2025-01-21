import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo5Component } from './lib70-demo5.component';

describe('Lib70Demo5Component', () => {
  let component: Lib70Demo5Component;
  let fixture: ComponentFixture<Lib70Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
