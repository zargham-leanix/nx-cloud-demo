import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo23Component } from './lib13-demo23.component';

describe('Lib13Demo23Component', () => {
  let component: Lib13Demo23Component;
  let fixture: ComponentFixture<Lib13Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
