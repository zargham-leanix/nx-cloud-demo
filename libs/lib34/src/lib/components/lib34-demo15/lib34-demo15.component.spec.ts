import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo15Component } from './lib34-demo15.component';

describe('Lib34Demo15Component', () => {
  let component: Lib34Demo15Component;
  let fixture: ComponentFixture<Lib34Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
