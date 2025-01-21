import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo31Component } from './lib9-demo31.component';

describe('Lib9Demo31Component', () => {
  let component: Lib9Demo31Component;
  let fixture: ComponentFixture<Lib9Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
