import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo42Component } from './lib65-demo42.component';

describe('Lib65Demo42Component', () => {
  let component: Lib65Demo42Component;
  let fixture: ComponentFixture<Lib65Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
