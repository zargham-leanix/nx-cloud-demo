import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo8Component } from './lib56-demo8.component';

describe('Lib56Demo8Component', () => {
  let component: Lib56Demo8Component;
  let fixture: ComponentFixture<Lib56Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
