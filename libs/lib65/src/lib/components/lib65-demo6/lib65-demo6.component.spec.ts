import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo6Component } from './lib65-demo6.component';

describe('Lib65Demo6Component', () => {
  let component: Lib65Demo6Component;
  let fixture: ComponentFixture<Lib65Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
