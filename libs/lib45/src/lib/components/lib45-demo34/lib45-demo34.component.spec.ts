import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo34Component } from './lib45-demo34.component';

describe('Lib45Demo34Component', () => {
  let component: Lib45Demo34Component;
  let fixture: ComponentFixture<Lib45Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
