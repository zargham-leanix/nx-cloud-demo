import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo35Component } from './lib76-demo35.component';

describe('Lib76Demo35Component', () => {
  let component: Lib76Demo35Component;
  let fixture: ComponentFixture<Lib76Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
