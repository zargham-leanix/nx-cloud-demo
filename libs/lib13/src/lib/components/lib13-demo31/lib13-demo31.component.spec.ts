import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo31Component } from './lib13-demo31.component';

describe('Lib13Demo31Component', () => {
  let component: Lib13Demo31Component;
  let fixture: ComponentFixture<Lib13Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
