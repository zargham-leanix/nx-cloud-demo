import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo33Component } from './lib34-demo33.component';

describe('Lib34Demo33Component', () => {
  let component: Lib34Demo33Component;
  let fixture: ComponentFixture<Lib34Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
