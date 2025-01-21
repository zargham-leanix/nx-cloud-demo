import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo29Component } from './lib97-demo29.component';

describe('Lib97Demo29Component', () => {
  let component: Lib97Demo29Component;
  let fixture: ComponentFixture<Lib97Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
