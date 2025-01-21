import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo8Component } from './lib35-demo8.component';

describe('Lib35Demo8Component', () => {
  let component: Lib35Demo8Component;
  let fixture: ComponentFixture<Lib35Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
