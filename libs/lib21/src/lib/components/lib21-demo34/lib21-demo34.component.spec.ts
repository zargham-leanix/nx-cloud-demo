import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo34Component } from './lib21-demo34.component';

describe('Lib21Demo34Component', () => {
  let component: Lib21Demo34Component;
  let fixture: ComponentFixture<Lib21Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
