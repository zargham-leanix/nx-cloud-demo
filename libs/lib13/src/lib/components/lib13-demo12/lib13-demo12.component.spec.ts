import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo12Component } from './lib13-demo12.component';

describe('Lib13Demo12Component', () => {
  let component: Lib13Demo12Component;
  let fixture: ComponentFixture<Lib13Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
