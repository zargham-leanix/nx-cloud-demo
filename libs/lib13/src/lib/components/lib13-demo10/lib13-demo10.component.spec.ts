import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo10Component } from './lib13-demo10.component';

describe('Lib13Demo10Component', () => {
  let component: Lib13Demo10Component;
  let fixture: ComponentFixture<Lib13Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
