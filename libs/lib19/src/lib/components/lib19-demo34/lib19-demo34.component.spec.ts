import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo34Component } from './lib19-demo34.component';

describe('Lib19Demo34Component', () => {
  let component: Lib19Demo34Component;
  let fixture: ComponentFixture<Lib19Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
