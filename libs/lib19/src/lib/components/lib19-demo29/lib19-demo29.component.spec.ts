import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo29Component } from './lib19-demo29.component';

describe('Lib19Demo29Component', () => {
  let component: Lib19Demo29Component;
  let fixture: ComponentFixture<Lib19Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
