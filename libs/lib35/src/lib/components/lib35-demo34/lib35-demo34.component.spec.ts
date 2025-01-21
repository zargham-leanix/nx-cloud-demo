import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo34Component } from './lib35-demo34.component';

describe('Lib35Demo34Component', () => {
  let component: Lib35Demo34Component;
  let fixture: ComponentFixture<Lib35Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
