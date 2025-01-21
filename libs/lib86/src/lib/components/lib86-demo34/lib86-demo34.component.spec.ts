import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo34Component } from './lib86-demo34.component';

describe('Lib86Demo34Component', () => {
  let component: Lib86Demo34Component;
  let fixture: ComponentFixture<Lib86Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
