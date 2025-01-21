import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo42Component } from './lib13-demo42.component';

describe('Lib13Demo42Component', () => {
  let component: Lib13Demo42Component;
  let fixture: ComponentFixture<Lib13Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
