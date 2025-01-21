import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo34Component } from './lib38-demo34.component';

describe('Lib38Demo34Component', () => {
  let component: Lib38Demo34Component;
  let fixture: ComponentFixture<Lib38Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
