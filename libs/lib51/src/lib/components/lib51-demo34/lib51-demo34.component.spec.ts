import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo34Component } from './lib51-demo34.component';

describe('Lib51Demo34Component', () => {
  let component: Lib51Demo34Component;
  let fixture: ComponentFixture<Lib51Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
