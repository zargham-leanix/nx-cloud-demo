import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo18Component } from './lib65-demo18.component';

describe('Lib65Demo18Component', () => {
  let component: Lib65Demo18Component;
  let fixture: ComponentFixture<Lib65Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
