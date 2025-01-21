import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo15Component } from './lib68-demo15.component';

describe('Lib68Demo15Component', () => {
  let component: Lib68Demo15Component;
  let fixture: ComponentFixture<Lib68Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
