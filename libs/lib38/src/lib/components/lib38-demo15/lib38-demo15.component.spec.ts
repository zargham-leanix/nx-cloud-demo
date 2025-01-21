import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo15Component } from './lib38-demo15.component';

describe('Lib38Demo15Component', () => {
  let component: Lib38Demo15Component;
  let fixture: ComponentFixture<Lib38Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
