import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo15Component } from './lib65-demo15.component';

describe('Lib65Demo15Component', () => {
  let component: Lib65Demo15Component;
  let fixture: ComponentFixture<Lib65Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
