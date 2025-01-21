import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo34Component } from './lib94-demo34.component';

describe('Lib94Demo34Component', () => {
  let component: Lib94Demo34Component;
  let fixture: ComponentFixture<Lib94Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
