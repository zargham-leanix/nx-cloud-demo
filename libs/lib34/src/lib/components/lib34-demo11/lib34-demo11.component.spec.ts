import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo11Component } from './lib34-demo11.component';

describe('Lib34Demo11Component', () => {
  let component: Lib34Demo11Component;
  let fixture: ComponentFixture<Lib34Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
