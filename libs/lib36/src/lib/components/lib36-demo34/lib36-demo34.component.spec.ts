import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo34Component } from './lib36-demo34.component';

describe('Lib36Demo34Component', () => {
  let component: Lib36Demo34Component;
  let fixture: ComponentFixture<Lib36Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
