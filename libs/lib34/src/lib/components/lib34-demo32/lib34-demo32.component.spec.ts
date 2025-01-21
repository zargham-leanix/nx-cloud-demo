import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo32Component } from './lib34-demo32.component';

describe('Lib34Demo32Component', () => {
  let component: Lib34Demo32Component;
  let fixture: ComponentFixture<Lib34Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
