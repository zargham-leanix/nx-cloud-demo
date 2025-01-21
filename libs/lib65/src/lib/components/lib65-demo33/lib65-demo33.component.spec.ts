import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo33Component } from './lib65-demo33.component';

describe('Lib65Demo33Component', () => {
  let component: Lib65Demo33Component;
  let fixture: ComponentFixture<Lib65Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
