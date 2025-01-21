import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo6Component } from './lib68-demo6.component';

describe('Lib68Demo6Component', () => {
  let component: Lib68Demo6Component;
  let fixture: ComponentFixture<Lib68Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
