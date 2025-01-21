import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo43Component } from './lib76-demo43.component';

describe('Lib76Demo43Component', () => {
  let component: Lib76Demo43Component;
  let fixture: ComponentFixture<Lib76Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
