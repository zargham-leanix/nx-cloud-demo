import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo42Component } from './lib76-demo42.component';

describe('Lib76Demo42Component', () => {
  let component: Lib76Demo42Component;
  let fixture: ComponentFixture<Lib76Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
