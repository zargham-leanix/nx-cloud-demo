import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo31Component } from './lib23-demo31.component';

describe('Lib23Demo31Component', () => {
  let component: Lib23Demo31Component;
  let fixture: ComponentFixture<Lib23Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
