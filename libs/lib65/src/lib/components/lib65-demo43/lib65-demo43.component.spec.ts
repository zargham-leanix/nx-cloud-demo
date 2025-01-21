import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo43Component } from './lib65-demo43.component';

describe('Lib65Demo43Component', () => {
  let component: Lib65Demo43Component;
  let fixture: ComponentFixture<Lib65Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
