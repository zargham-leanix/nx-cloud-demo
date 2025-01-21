import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo34Component } from './lib97-demo34.component';

describe('Lib97Demo34Component', () => {
  let component: Lib97Demo34Component;
  let fixture: ComponentFixture<Lib97Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
