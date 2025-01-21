import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo44Component } from './lib76-demo44.component';

describe('Lib76Demo44Component', () => {
  let component: Lib76Demo44Component;
  let fixture: ComponentFixture<Lib76Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
