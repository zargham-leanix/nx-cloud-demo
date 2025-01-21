import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo35Component } from './lib13-demo35.component';

describe('Lib13Demo35Component', () => {
  let component: Lib13Demo35Component;
  let fixture: ComponentFixture<Lib13Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
