import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo34Component } from './lib24-demo34.component';

describe('Lib24Demo34Component', () => {
  let component: Lib24Demo34Component;
  let fixture: ComponentFixture<Lib24Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
