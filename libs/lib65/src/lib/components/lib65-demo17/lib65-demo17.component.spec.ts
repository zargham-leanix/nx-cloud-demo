import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo17Component } from './lib65-demo17.component';

describe('Lib65Demo17Component', () => {
  let component: Lib65Demo17Component;
  let fixture: ComponentFixture<Lib65Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
