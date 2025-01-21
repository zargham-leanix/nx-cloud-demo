import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo34Component } from './lib14-demo34.component';

describe('Lib14Demo34Component', () => {
  let component: Lib14Demo34Component;
  let fixture: ComponentFixture<Lib14Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
