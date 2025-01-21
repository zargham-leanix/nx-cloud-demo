import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo34Component } from './lib76-demo34.component';

describe('Lib76Demo34Component', () => {
  let component: Lib76Demo34Component;
  let fixture: ComponentFixture<Lib76Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
