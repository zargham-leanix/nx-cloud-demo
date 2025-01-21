import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo34Component } from './lib5-demo34.component';

describe('Lib5Demo34Component', () => {
  let component: Lib5Demo34Component;
  let fixture: ComponentFixture<Lib5Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
