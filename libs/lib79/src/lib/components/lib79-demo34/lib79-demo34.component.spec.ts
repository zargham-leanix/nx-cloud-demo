import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo34Component } from './lib79-demo34.component';

describe('Lib79Demo34Component', () => {
  let component: Lib79Demo34Component;
  let fixture: ComponentFixture<Lib79Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
