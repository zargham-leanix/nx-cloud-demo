import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo31Component } from './lib19-demo31.component';

describe('Lib19Demo31Component', () => {
  let component: Lib19Demo31Component;
  let fixture: ComponentFixture<Lib19Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
