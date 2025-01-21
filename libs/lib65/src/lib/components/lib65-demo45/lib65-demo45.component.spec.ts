import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo45Component } from './lib65-demo45.component';

describe('Lib65Demo45Component', () => {
  let component: Lib65Demo45Component;
  let fixture: ComponentFixture<Lib65Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
