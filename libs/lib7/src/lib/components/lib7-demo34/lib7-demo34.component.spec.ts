import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo34Component } from './lib7-demo34.component';

describe('Lib7Demo34Component', () => {
  let component: Lib7Demo34Component;
  let fixture: ComponentFixture<Lib7Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
