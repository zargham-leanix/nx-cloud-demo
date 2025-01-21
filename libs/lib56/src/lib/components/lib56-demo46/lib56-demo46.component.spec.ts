import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo46Component } from './lib56-demo46.component';

describe('Lib56Demo46Component', () => {
  let component: Lib56Demo46Component;
  let fixture: ComponentFixture<Lib56Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
