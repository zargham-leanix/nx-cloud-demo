import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo8Component } from './lib13-demo8.component';

describe('Lib13Demo8Component', () => {
  let component: Lib13Demo8Component;
  let fixture: ComponentFixture<Lib13Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
